import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Foorm from "../form/form";
import { getItem, updateItem } from "@/app/api/item"; // Import getItem function
import { Productts } from "@/utils/model/item";

interface UpdateProductFormProps {
  id: number;
}

const UpdateProductForm: React.FC<UpdateProductFormProps> = ({ id }) => {
  const [formData, setFormData] = useState<Productts>({
    price: 0,
    description: "",
    title: "",
    discountPercentage: 0,
    stock: 10,
    brand: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const itemData = await getItem(id);
          setFormData(itemData.data);
        }
      } catch (error) {
        throw new Error("error getting item");
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const updatedItem = await updateItem(id, formData).then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          backdrop: "true",
          confirmButtonAriaLabel: "OK",
          timer: 10000,
          text: "Item updated successfully!",
        });
      });

      // console.log(updatedItem);
      // setFormData(updatedItem);
    } catch (error) {
      console.error("Error updating item:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <Foorm
        brand={formData.brand}
        category={formData.category}
        description={formData.description}
        discountPercentage={formData.discountPercentage}
        price={formData.price}
        stock={formData.stock}
        thumbnail={formData.thumbnail}
        handleChange={handleChange}
        title={formData.title}
        handleSubmit={handleSubmit}
      ></Foorm>
    </div>
  );
};

export default UpdateProductForm;
