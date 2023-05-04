// <div className="container">
//   <div className="row">
//     <h1>Add Product</h1>
//     <Box
//       component="form"
//       noValidate
//       onSubmit={handleSubmit}
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "50ch" },
//       }}
//       className="d-flex flex-wrap"
//     >
//       <div className="col-md-6">
//         <TextField
//           id="productName"
//           label="Product Name"
//           type="text"
//           name="productName"
//           variant="standard"
//           helperText={
//             <span style={{ color: "red" }}>{errors.productName}</span>
//           }
//           value={values.productName}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           sx={{ fontSize: "16px" }}
//         />
//         <TextField
//           id="category"
//           select
//           label="Category"
//           name="category"
//           variant="standard"
//           helperText={<span style={{ color: "red" }}>{errors.category}</span>}
//           value={values.category}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           sx={{ fontSize: "12px" }}
//         >
//           {categories.map((option, index) => (
//             <MenuItem
//               key={index}
//               value={option}
//               onClick={() => setCategory(option)}
//             >
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="gender"
//           select
//           label="Gender"
//           name="gender"
//           variant="standard"
//           helperText={<span style={{ color: "red" }}>{errors.gender}</span>}
//           value={values.gender}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           sx={{ fontSize: "3.5px" }}
//         >
//           {gender.map((option, index) => (
//             <MenuItem key={index} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="price"
//           label="Price"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           name="price"
//           variant="standard"
//           helperText={<span style={{ color: "red" }}>{errors.price}</span>}
//           value={values.price}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           sx={{ fontSize: "12px" }}
//         />
//         <TextField
//           id="description"
//           label="Description"
//           multiline
//           rows={4}
//           name="description"
//           variant="standard"
//           helperText={
//             <span style={{ color: "red" }}>{errors.description}</span>
//           }
//           value={values.description}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//       </div>
//       <div className="col-md-6">
//         <div>
//           <ImageUploader />
//           <div>Size</div>
//           {category === "Shirt" || category === "T-shirt"
//             ? upperwear.map((option, index) => (
//                 <FormControlLabel
//                   key={index}
//                   control={<Checkbox />}
//                   label={option}
//                 />
//               ))
//             : bottomwear.map((option, index) => (
//                 <FormControlLabel control={<Checkbox />} label={option} />
//               ))}
//           <FormHelperText sx={{ color: "red" }}>{errors.size}</FormHelperText>
//           <div>Color</div>
//           {colors.map((option, index) => (
//             <FormControlLabel
//               key={index}
//               control={<Checkbox />}
//               label={option}
//             />
//           ))}
//           <FormHelperText sx={{ color: "red" }}>{errors.color}</FormHelperText>
//         </div>
//       </div>
//       <Button
//         className="submitbtn"
//         type="submit"
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//       >
//         Add product
//       </Button>
//     </Box>
//   </div>
// </div>;
