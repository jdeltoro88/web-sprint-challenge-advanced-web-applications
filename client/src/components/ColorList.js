import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  //setting up the edit color function onclick takes. no clue why that isn't throwing an error
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  //setting up a function to re-call color data after making changes 
  const reColor = () => {
    axiosWithAuth().get('/colors')
          .then(res => {
            updateColors(res.data);
          })
          .catch(err => {
            console.error(err);
          })
  }
  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`/colors/${colorToEdit.id}`, colorToEdit )
    .then((res) => {
        console.log(res)
        reColor()
      })
      .catch(err => {
        console.error(err)
      })
}

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
          .delete(`/colors/${color.id}`)
          .then((res) => {
            console.log(res);
            reColor()
        })
        .catch(err => {
          console.error(err);
        })
  };
/*
  const onFormSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", newColor)
      .then(res => {
        console.log("ColorList.js: onFormSubmit: add color success", res);
        updateColors(res.data);
        setNewColor(initialColor);
      })
      .catch(err => console.log(err));
  };
  */


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color 
      /
      <form onSubmit={onFormSubmit}>
        <h4>Add new color!</h4>
        <input
          type="text"
          name="color"
          placeholder="color name"
          value={newColor.color}
          onChange={e => setNewColor({ ...newColor, color: e.target.value })}
          className="fields"
        />
        <input
          type="text"
          name="hex"
          placeholder="hex code"
          value={newColor.code.hex}
          onChange={e =>
            setNewColor({ ...newColor, code: { hex: e.target.value } })
          }
          className="fields"
        />
        <button type="submit">Add color</button>
      </form>
        */}
    </div>
  );
};

export default ColorList;
