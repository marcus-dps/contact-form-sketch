import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/Sketch1.jpg">
              <Button to="/page2" x="187" y="480" w="137" h="58" />
            </Screen>
          }
        />
        <Route
          path="/page2"
          element={
            <Screen image="/Sketch2.jpg">
              <Button to="/page3" x="200" y="510" w="140" h="55" />
            </Screen>
          }
        />
        <Route
          path="/page3"
          element={
            <Screen image="/Sketch3.jpg">
              <Button to="/page2" x="40" y="490" w="150" h="55" />
              <Button to="/page4" x="200" y="490" w="150" h="55" />
              <select
                placeholder="Choose a topic"
                style={{
                  background: "",
                  position: "absolute",
                  left: "30px",
                  top: "165px",
                  width: "300px",
                  height: "50px"
                }}
              >
                <option value="" disabled selected>
                  Choose your topic
                </option>
                <option>Aerospace</option>
                <option>Blockchain</option>
                <option>Finance</option>
              </select>
              <input
                style={{
                  background: "",
                  position: "absolute",
                  left: "30px",
                  top: "250px",
                  width: "300px",
                  height: "180px"
                }}
                type="text"
              />
            </Screen>
          }
        />
        <Route
          path="/page4"
          element={
            <Screen image="/Sketch4.jpg">
              <Button to="/page5" x="195" y="510" w="120" h="50" />
            </Screen>
          }
        />
        <Route
          path="/page5"
          element={
            <Screen image="/Sketch5.jpg">
              <Input x="40" y="220" w="260" h="50" />
              <Input x="40" y="310" w="260" h="50" />
              <Input x="40" y="400" w="260" h="50" />
              <Button to="/page4" x="194" y="483" w="129" h="50" />
              <Button to="/page3" x="50" y="483" w="129" h="50" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
