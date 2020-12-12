
//setting up token 
//failed
/*
let token;
  beforeAll((done) => {
    axiosWithAuth()
      .post('/login')
      .send({
        username: "Lambda School",
        password: "i<3Lambd4",
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
      
     //setting up jest for hooks
     jest.mock('react-router', () => ({
       ...jest.requireActual('react-router'),
       useHistory: () => ({
         push:jest.fn()
       })
     }))

test("User Can Login ", async () => {
  const mockOnSubmit = jest.fn()
  const{getByTestId, getByRole} = render(<Login onSubmit = {mockOnSubmit} />);
  const usernameInput = getByTestId("username")
  const passwordInput = getByTestId("password")
  await act (async () => {
    fireEvent.change(usernameInput, {target:{value:"Lambda School"}})
    fireEvent.change(passwordInput , {target: {value:"I<3Lambd4"}})
  })
  await act(async () => {
    fireEvent.click(getByTestId("submit"))
})
  expect(mockOnSubmit).toHaveBeenCalled
});

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  localStorage.setItem('token', token);
  const {getByText} = render(<BubblePage />)

  await wait (() => {
    getByText(/lilac/i);
  });
  const bubble = screen.getByText(/lilac/i);

  expect(bubble).toBeInTheDocument();

});

*/

import React from "react";
import { render, queryAllByTestId } from "@testing-library/react";
import ColorList from "./ColorList";
  let colorsData = [ // This test includes data from server.js
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd"
      },
      id: 5
    },
    {
      color: "softpink",
      code: {
        hex: "#dd99ba"
      },
      id: 6
    },
    {
      color: "bisque",
      code: {
        hex: "#dd9a99"
      },
      id: 7
    },
    {
      color: "softyellow",
      code: {
        hex: "#dcdd99"
      },
      id: 8
    },
    {
      color: "blanchedalmond",
      code: {
        hex: "#ffebcd"
      },
      id: 9
    },
    {
      color: "blue",
      code: {
        hex: "#6093ca"
      },
      id: 10
    },
    {
      color: "blueviolet",
      code: {
        hex: "#8a2be2"
      },
      id: 11
    }
  ];
  test("Fetches data and renders the bubbles", () => {
      // Finish this test
    const { rerender, queryAllByTestId } = render(<ColorList colors={[]} />)
    expect(queryAllByTestId(/colors/i)).toHaveLength(0);
    rerender(<ColorList colors={colorsData} />)
    const colors = queryAllByTestId(/colors/i)
    expect(colors).toHaveLength(11)
  });