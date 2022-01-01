
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import Details from "../Component/Details";
import { InitPost } from "../Component/Home";
test("Details test render", () => {
  const history = createMemoryHistory();
  const post:InitPost = {title: 'post',
    url: 'abc',
    created_at: new Date(Math.random() ? new Date() : "123"),
    author: 'asjdhsj'}

    history.push('/details',post)
  
  render(<Router history={history}>
      <Details/>
  </Router>);
    const details = screen.getByTestId('details')
  expect(details).toBeInTheDocument()
});
