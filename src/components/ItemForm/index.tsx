import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
import { useItemCreate } from "../../usecases/Item/useItemCreate";

const schema = z.object({
  name: z.string().nonempty({ message: "Can't be empty" }),
  description: z.string().nonempty({ message: "Can't be empty" }),
});

export const ItemForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { createItem } = useItemCreate();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log("data", data);
    await createItem({
      name: data.name,
      description: data.description,
    });
    router.push("/item");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Item/New</p>
      <div>
        <p>name</p>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <p>description</p>
        <input {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};
