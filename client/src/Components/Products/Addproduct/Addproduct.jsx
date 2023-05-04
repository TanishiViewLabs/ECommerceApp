// import React, { useState } from "react";
// import Gender from "../../Filters/Gender/Gender";
// import Category from "../../Filters/Category/Category";
// import Pricerange from "../../Filters/Pricerange/Pricerange";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
// } from "@material-ui/core";
// import "./Addproduct.css";
// // import ImageUploader from "./ImageUploader";
// import axios from "axios";
// import { Container, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const validationSchema = Yup.object({
//   name: Yup.string().required("*Product name is required"),
//   category: Yup.string().required("*Category is required"),
//   audience: Yup.string().required("*Gender is required"),
//   color: Yup.array().min(1, "*At least one color is required"),
//   size: Yup.array().min(1, "*At least one size is required"),
//   productDetails: Yup.string().required("*Product description is required"),
//   price: Yup.number().required("*Price is required"),
//   quantity: Yup.number().required("*Quantity is required"),
//   currFilePath: Yup.array()
//     .of(Yup.mixed())
//     .max(4, "Maximum of 4 images allowed")
//     .required("At least one image is required"),
// });

// function Addproduct() {
//   const history = useNavigate();
//   const gender = ["Men", "Women", "Boys", "Girls"];
//   const categories = ["T-shirt", "Shirt", "Jeans", "Shoes"];
//   const upperwear = ["S", "M", "L", "XL", "XXL"];
//   const bottomwear = ["28", "30", "32", "34"];
//   const color = ["red", "blue", "green"];
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleRemoveFile = (id) => {
//     const updatedFiles = uploadedFiles.filter((file) => file.id !== id);
//     setUploadedFiles(updatedFiles);
//     formik.setFieldValue(
//       "currFilePath",
//       updatedFiles.map((file) => file.file)
//     );
//   };

//   const handleFileUpload = (event) => {
//     const files = event.target.files;
//     const fileArray = Array.from(files);
//     // formik.setFieldValue("currFilePath", fileArray);

//     const filePromises = fileArray.map((file) => {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           resolve(event.target.result);
//         };
//         reader.onerror = (err) => {
//           reject(err);
//         };
//         reader.readAsDataURL(file);
//       });
//     });

//     // console.log("files", files);
//     // console.log("file array", fileArray);

//     Promise.all(filePromises)
//       .then((filePaths) => {
//         console.log("array", fileArray);
//         console.log("file paths", filePaths);
//         const newFiles = filePaths.map((path, index) => ({
//           id: Date.now() + index, // generate a unique id for each file
//           file: fileArray,
//           path,
//         }));
//         console.log("new files", newFiles);
//         setUploadedFiles([...uploadedFiles, ...newFiles]);
//         // setUploadedFiles([...uploadedFiles, ...newFiles]);
//         // formik.setFieldValue("currFilePath", uploadedFiles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       category: "",
//       audience: "",
//       color: [],
//       productDetails: "",
//       price: "",
//       size: [],
//       quantity: "",
//       currFilePath: [],
//     },
//     validationSchema,
//     onSubmit: (values, action) => {
//       console.log(values);
//       axios
//         .post("http://localhost:8000/insertProduct", {
//           name: values.name,
//           category: values.category,
//           audience: values.audience,
//           color: values.color,
//           productDetails: values.productDetails,
//           price: values.price,
//           size: values.size,
//           quantity: values.quantity,
//           currFilePath: uploadedFiles,
//         })
//         .then((res) => {
//           if (res.data.status === "success") {
//             toast.success("Product Added Successfully!!", {
//               style: { fontSize: "14px" },
//             });
//             history("/");
//           }
//         });
//       console.log(uploadedFiles);
//       // action.resetForm();
//     },
//   });

//   return (
//     <div className="home-main add-main">
//       <div className="filters col-md-2">
//         <h6 className="text-center mt-3">FILTERS</h6>
//         <hr />
//         <Gender gender={gender} />
//         <Category categories={categories} />
//         <Pricerange />
//       </div>

//       <Container>
//         <Typography variant="h4" sx={{ mt: 3 }}>
//           Add Product
//         </Typography>
//         <form onSubmit={formik.handleSubmit} className="d-flex flex-wrap my-5">
//           <div className="col-sm-6">
//             <div className="form-fields">
//               <input
//                 className="inputField"
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Product Name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.name && formik.errors.name ? (
//                 <div style={{ color: "red" }}>{formik.errors.name}</div>
//               ) : null}
//             </div>
//             <div className="d-flex">
//               <div className="form-fields">
//                 <FormControl
//                   error={
//                     formik.touched.category && Boolean(formik.errors.category)
//                   }
//                   style={{ minWidth: 200 }}
//                 >
//                   <InputLabel id="category-label">Category:</InputLabel>
//                   <Select
//                     labelId="category-label"
//                     id="category"
//                     name="category"
//                     value={formik.values.category}
//                     onChange={formik.handleChange}
//                   >
//                     {categories.map((category, index) => (
//                       <MenuItem key={index} value={category}>
//                         {category}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formik.touched.category && formik.errors.category ? (
//                     <div style={{ color: "red" }}>{formik.errors.category}</div>
//                   ) : null}
//                 </FormControl>
//               </div>
//               <div className="form-fields">
//                 <FormControl
//                   error={
//                     formik.touched.audience && Boolean(formik.errors.audience)
//                   }
//                   style={{ minWidth: 200 }}
//                 >
//                   <InputLabel id="gender-label">Gender:</InputLabel>
//                   <Select
//                     labelId="gender-label"
//                     id="audience"
//                     name="audience"
//                     value={formik.values.audience}
//                     onChange={formik.handleChange}
//                   >
//                     {gender.map((audience, index) => (
//                       <MenuItem key={index} value={audience}>
//                         {audience}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formik.touched.audience && formik.errors.audience ? (
//                     <div style={{ color: "red" }}>{formik.errors.audience}</div>
//                   ) : null}
//                 </FormControl>
//               </div>
//             </div>

//             <div className="form-fields">
//               <input
//                 className="inputField"
//                 type="number"
//                 id="price"
//                 name="price"
//                 placeholder="Price"
//                 value={formik.values.price}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.price && formik.errors.price ? (
//                 <div style={{ color: "red" }}>{formik.errors.price}</div>
//               ) : null}
//             </div>
//             <div className="form-fields">
//               <textarea
//                 className="inputField"
//                 id="productDetails"
//                 name="productDetails"
//                 placeholder="Description"
//                 value={formik.values.productDetails}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.productDetails && formik.errors.productDetails ? (
//                 <div style={{ color: "red" }}>
//                   {formik.errors.productDetails}
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <div className="col-sm-6">
//             <div className="form-fields">
//               <input
//                 type="file"
//                 id="currFilePath"
//                 name="currFilePath"
//                 multiple
//                 // value={formik.values.currFilePath}
//                 // onChange={(e) => {
//                 //   setUploadedFiles(e.currentTarget.files[0]);
//                 //   console.log(e.currentTarget.files[0]);
//                 // }}
//                 onChange={handleFileUpload}
//               />
//               {formik.touched.currFilePath && formik.errors.currFilePath ? (
//                 <div>{formik.errors.currFilePath}</div>
//               ) : null}
//             </div>
//             {uploadedFiles.length > 0 && (
//               <div>
//                 <ul className="product-img-list mt-3">
//                   {uploadedFiles.map((file) => (
//                     <div className="product-img">
//                       <li key={file.id}>
//                         <img
//                           src={file.path}
//                           alt={file.file.name}
//                           width="100"
//                           height="100"
//                         />
//                       </li>
//                       <button
//                         className="btn btn-group btn-danger btn-sm remove-img-btn"
//                         type="button"
//                         onClick={() => handleRemoveFile(file.id)}
//                       >
//                         X
//                       </button>
//                     </div>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="d-flex">
//               <div className="form-fields color">
//                 <FormControl
//                   error={formik.touched.color && Boolean(formik.errors.color)}
//                   style={{ minWidth: 200 }}
//                 >
//                   <InputLabel id="color-label">Color:</InputLabel>
//                   <Select
//                     labelId="color-label"
//                     id="color"
//                     name="color"
//                     multiple
//                     value={formik.values.color}
//                     onChange={formik.handleChange}
//                     renderValue={(selected) => selected.join(", ")}
//                   >
//                     {color.map((interest, index) => (
//                       <MenuItem key={index} value={interest}>
//                         <Checkbox
//                           checked={formik.values.color.includes(interest)}
//                         />
//                         <ListItemText primary={interest} />
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formik.touched.color && formik.errors.color ? (
//                     <div style={{ color: "red" }}>{formik.errors.color}</div>
//                   ) : null}
//                 </FormControl>
//               </div>
//               <div className="form-fields color">
//                 <FormControl
//                   error={formik.touched.size && Boolean(formik.errors.size)}
//                   style={{ minWidth: 200 }}
//                 >
//                   <InputLabel id="size-label">Size:</InputLabel>
//                   <Select
//                     labelId="size-label"
//                     id="size"
//                     name="size"
//                     multiple
//                     value={formik.values.size}
//                     onChange={formik.handleChange}
//                     renderValue={(selected) => selected.join(", ")}
//                   >
//                     {formik.values.category === "T-shirt" ||
//                     formik.values.category === "Shirt"
//                       ? upperwear.map((interest, index) => (
//                           <MenuItem key={index} value={interest}>
//                             <Checkbox
//                               checked={formik.values.size.includes(interest)}
//                             />
//                             <ListItemText primary={interest} />
//                           </MenuItem>
//                         ))
//                       : bottomwear.map((interest, index) => (
//                           <MenuItem key={index} value={interest}>
//                             <Checkbox
//                               checked={formik.values.size.includes(interest)}
//                             />
//                             <ListItemText primary={interest} />
//                           </MenuItem>
//                         ))}
//                   </Select>
//                   {formik.touched.size && formik.errors.size ? (
//                     <div style={{ color: "red" }}>{formik.errors.size}</div>
//                   ) : null}
//                 </FormControl>
//               </div>
//             </div>
//             <div className="form-fields">
//               <input
//                 className="inputField"
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 placeholder="Quantity"
//                 value={formik.values.quantity}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.quantity && formik.errors.quantity ? (
//                 <div style={{ color: "red" }}>{formik.errors.quantity}</div>
//               ) : null}
//             </div>
//           </div>
//           <div>
//             <button className="btn btn-primary mt-5 add-btn" type="submit">
//               Add Product
//             </button>
//           </div>
//         </form>
//       </Container>
//     </div>
//   );
// }

// export default Addproduct;

import React, { useState } from "react";
import Gender from "../../Filters/Gender/Gender";
import Category from "../../Filters/Category/Category";
import Pricerange from "../../Filters/Pricerange/Pricerange";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import "./Addproduct.css";
// import ImageUploader from "./ImageUploader";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("*Product name is required"),
  category: Yup.string().required("*Category is required"),
  audience: Yup.string().required("*Gender is required"),
  color: Yup.array().min(1, "*At least one color is required"),
  size: Yup.array().min(1, "*At least one size is required"),
  productDetails: Yup.string().required("*Product description is required"),
  price: Yup.number().required("*Price is required"),
  quantity: Yup.number().required("*Quantity is required"),
  // currFilePath: Yup.array()
  //   .of(Yup.mixed())
  //   .max(4, "Maximum of 4 images allowed")
  //   .required("At least one image is required"),
});

function Addproduct() {
  const history = useNavigate();
  const gender = ["Men", "Women", "Boys", "Girls"];
  const categories = ["T-shirt", "Shirt", "Jeans", "Shoes"];
  const upperwear = ["S", "M", "L", "XL", "XXL"];
  const bottomwear = ["28", "30", "32", "34"];
  const color = ["red", "blue", "green"];
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [image, setImage] = useState("");

  console.log(image);

  const handleRemoveFile = (id) => {
    const updatedFiles = uploadedFiles.filter((file) => file.id !== id);
    setUploadedFiles(updatedFiles);
    formik.setFieldValue(
      "currFilePath",
      updatedFiles.map((file) => file.file)
    );
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    // formik.setFieldValue("currFilePath", fileArray);

    const filePromises = fileArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.onerror = (err) => {
          reject(err);
        };
        reader.readAsDataURL(file);
      });
    });

    // console.log("files", files);
    // console.log("file array", fileArray);

    Promise.all(filePromises)
      .then((filePaths) => {
        console.log("array", fileArray);
        console.log("file paths", filePaths);
        const newFiles = filePaths.map((path, index) => ({
          id: Date.now() + index, // generate a unique id for each file
          file: fileArray,
          path,
        }));
        console.log("new files", newFiles);
        setUploadedFiles([...uploadedFiles, ...newFiles]);
        // setUploadedFiles([...uploadedFiles, ...newFiles]);
        // formik.setFieldValue("currFilePath", uploadedFiles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      audience: "",
      color: [],
      productDetails: "",
      price: "",
      size: [],
      quantity: "",
      // currFilePath: [],
    },
    validationSchema,
    onSubmit: (values, action) => {
      console.log("504", values);
      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("category", values.category);
      formdata.append("audience", values.audience);
      formdata.append("color", values.color);
      formdata.append("productDetails", values.productDetails);
      formdata.append("price", values.price);
      formdata.append("size", values.size);
      formdata.append("quantity", values.quantity);
      formdata.append("image", image);
      axios
        .post("http://localhost:8000/insertProduct", formdata)
        // name: values.name,
        // category: values.category,
        // audience: values.audience,
        // color: values.color,
        // productDetails: values.productDetails,
        // price: values.price,
        // size: values.size,
        // quantity: values.quantity,
        // currFilePath: uploadedFiles,
        .then((res) => {
          if (res.data.status === "success") {
            toast.success("Product Added Successfully!!", {
              style: { fontSize: "14px" },
            });
            history("/");
          }
        });
      console.log("536", formdata);
      // action.resetForm();
    },
  });

  return (
    <div className="home-main add-main">
      <div className="filters col-md-2">
        <h6 className="text-center mt-3">FILTERS</h6>
        <hr />
        <Gender gender={gender} />
        <Category categories={categories} />
        <Pricerange />
      </div>

      <Container>
        <Typography variant="h4" sx={{ mt: 3 }}>
          Add Product
        </Typography>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-wrap my-5">
          <div className="col-sm-6">
            <div className="form-fields">
              <input
                className="inputField"
                type="text"
                id="name"
                name="name"
                placeholder="Product Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="d-flex">
              <div className="form-fields">
                <FormControl
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  style={{ minWidth: 200 }}
                >
                  <InputLabel id="category-label">Category:</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  >
                    {categories.map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.category && formik.errors.category ? (
                    <div style={{ color: "red" }}>{formik.errors.category}</div>
                  ) : null}
                </FormControl>
              </div>
              <div className="form-fields">
                <FormControl
                  error={
                    formik.touched.audience && Boolean(formik.errors.audience)
                  }
                  style={{ minWidth: 200 }}
                >
                  <InputLabel id="gender-label">Gender:</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="audience"
                    name="audience"
                    value={formik.values.audience}
                    onChange={formik.handleChange}
                  >
                    {gender.map((audience, index) => (
                      <MenuItem key={index} value={audience}>
                        {audience}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.audience && formik.errors.audience ? (
                    <div style={{ color: "red" }}>{formik.errors.audience}</div>
                  ) : null}
                </FormControl>
              </div>
            </div>

            <div className="form-fields">
              <input
                className="inputField"
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.touched.price && formik.errors.price ? (
                <div style={{ color: "red" }}>{formik.errors.price}</div>
              ) : null}
            </div>
            <div className="form-fields">
              <textarea
                className="inputField"
                id="productDetails"
                name="productDetails"
                placeholder="Description"
                value={formik.values.productDetails}
                onChange={formik.handleChange}
              />
              {formik.touched.productDetails && formik.errors.productDetails ? (
                <div style={{ color: "red" }}>
                  {formik.errors.productDetails}
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-fields">
              <input
                type="file"
                // multiple
                onChange={(e) => setImage(e.target.files[0])}
                // onChange={(e) => setImage(e.target.files)}
              />
            </div>
            <div className="d-flex">
              <div className="form-fields color">
                <FormControl
                  error={formik.touched.color && Boolean(formik.errors.color)}
                  style={{ minWidth: 200 }}
                >
                  <InputLabel id="color-label">Color:</InputLabel>
                  <Select
                    labelId="color-label"
                    id="color"
                    name="color"
                    multiple
                    value={formik.values.color}
                    onChange={formik.handleChange}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {color.map((interest, index) => (
                      <MenuItem key={index} value={interest}>
                        <Checkbox
                          checked={formik.values.color.includes(interest)}
                        />
                        <ListItemText primary={interest} />
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.color && formik.errors.color ? (
                    <div style={{ color: "red" }}>{formik.errors.color}</div>
                  ) : null}
                </FormControl>
              </div>
              <div className="form-fields color">
                <FormControl
                  error={formik.touched.size && Boolean(formik.errors.size)}
                  style={{ minWidth: 200 }}
                >
                  <InputLabel id="size-label">Size:</InputLabel>
                  <Select
                    labelId="size-label"
                    id="size"
                    name="size"
                    multiple
                    value={formik.values.size}
                    onChange={formik.handleChange}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {formik.values.category === "T-shirt" ||
                    formik.values.category === "Shirt"
                      ? upperwear.map((interest, index) => (
                          <MenuItem key={index} value={interest}>
                            <Checkbox
                              checked={formik.values.size.includes(interest)}
                            />
                            <ListItemText primary={interest} />
                          </MenuItem>
                        ))
                      : bottomwear.map((interest, index) => (
                          <MenuItem key={index} value={interest}>
                            <Checkbox
                              checked={formik.values.size.includes(interest)}
                            />
                            <ListItemText primary={interest} />
                          </MenuItem>
                        ))}
                  </Select>
                  {formik.touched.size && formik.errors.size ? (
                    <div style={{ color: "red" }}>{formik.errors.size}</div>
                  ) : null}
                </FormControl>
              </div>
            </div>
            <div className="form-fields">
              <input
                className="inputField"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div style={{ color: "red" }}>{formik.errors.quantity}</div>
              ) : null}
            </div>
          </div>
          <div>
            <button className="btn btn-primary mt-5 add-btn" type="submit">
              Add Product
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Addproduct;
