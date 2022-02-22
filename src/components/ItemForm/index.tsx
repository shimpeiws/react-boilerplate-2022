import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  const { createItem, errors: itemCreateErrors } = useItemCreate();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await createItem({
      name: data.name,
      description: data.description,
    });
    router.push("/item");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Item/New</p>
      {itemCreateErrors.length > 0 &&
        itemCreateErrors.map((error, i) => {
          return <p key={i}>{error}</p>;
        })}
      <div>
        <p>name</p>
        <input data-testid="input-name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <p>description</p>
        <input data-testid="input-description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <input data-testid="submit-button" type="submit" />
    </form>
  );
};
