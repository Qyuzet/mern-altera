// @ts-nocheck
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import { useProductStore } from "./store/product.ts";
import { Link } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  price: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a valid number.",
    })
    .transform((val) => Number(val)),
  image: z.string().min(2, {
    message: "Image must be at least 2 characters.",
  }),
});

export function ProfileForm({
  product,
}: {
  product?: { id: string; name: string; price: number; image: string };
}) {
  const { createProduct, updateProduct } = useProductStore();
  const { toast } = useToast();

  // 1. Define your form with default values for editing or creation.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product
      ? {
          name: product.name,
          price: product.price.toString(),
          image: product.image,
        }
      : {
          name: "",
          price: "",
          image: "",
        },
  });

  // 2. Define a submit handler for creation or update.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (product) {
      // Update Product
      const { success, message } = await updateProduct({
        id: product.id,
        ...values,
      });
      console.log("Success: ", success, "Message:", message);
      if (success) {
        toast({
          title: "Product Updated",
          description: "Changes have been saved.",
        });
      } else {
        alert(message); // Optional: Notify the user if something went wrong
      }
    } else {
      // Create Product
      const { success, message } = await createProduct(values);
      console.log("Success: ", success, "Message:", message);
      if (success) {
        // Reset the form fields
        form.reset({ name: "", price: "", image: "" });
        toast({
          title: "New Product Created",
          description: "Saved in Database",
        });
      } else {
        alert(message); // Optional: Notify the user if something went wrong
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>This is your product name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="Image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {product ? "Update Product" : "Create Product"}
        </Button>
      </form>
    </Form>
  );
}
