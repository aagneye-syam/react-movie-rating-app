import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./MutationLogin"; // Assuming MutationLogin.tsx exists
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const { mutate, data, error, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await mutate(); // Call the mutation to fetch data

      if (!error) { // Check for errors from the mutation
        localStorage.setItem("guest_session_id", data.guest_session_id);
        navigate("/");
      } else {
        console.error("Error logging in:", error);
        // Handle the error appropriately, e.g., display an error message
      }
    } catch (error) { // Catch any other errors during mutation execution
      console.error("Error during mutation:", error);
      // Handle the error appropriately, e.g., display an error message
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
