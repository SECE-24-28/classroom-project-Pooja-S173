import validate from "./validate";

export default function App() {
  return (
    <>
      {" "}
      <form action="">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Username">Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter your username"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">password</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                />
              </td>
            </tr>
            <tr>
              <td> 
                <input type ="checkbox" name="remember" id ="remember" value="remember"/>
                <label htmlFor="remember">remember</label>
              </td>
              <td>
                <input type="button" value="Submit" onClick={validate} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
