import * as React from "react";

import Confirmation from "../Confirmation";
import Dashboard from "../Dashboard";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

const App = () => {
  return (
    <div className="app">
      <Dashboard>
        <Form
          handleSubmit={() => {
            /*TODO*/
          }}
        >
          <Input id="description" label="Task description:" />
          <Button kind={"outline"}>Submit</Button>
        </Form>
        <Confirmation message="Show results here..." />
      </Dashboard>
    </div>
  );
};

export default App;
