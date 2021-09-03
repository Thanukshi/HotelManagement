import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Components/Common/Home";
import HomeLogin from "./Components/Common/HomeLogin";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";
import ActivationEmail from "./Components/Common/ActivationEmail";

import RestuarnatMenu from "./Components/Admin/Resturant/Restuarant";
import AddFoodMenu from "./Components/Admin/Resturant/AddFoodMenu";
import GetAllFoodsMenuList from "./Components/Admin/Resturant/GetAllFoodsMenuList";
import GetAllBreakfirstFoods from "./Components/Admin/Resturant/GetAllBreakfirstFoods";
import GetAllLunchFoods from "./Components/Admin/Resturant/GetAllLunchFoods";
import GetAllTeaTimeFoods from "./Components/Admin/Resturant/GetAllTeaTimeFoods";
import GetAllDinnerFoods from "./Components/Admin/Resturant/GetAllDinnerFoods";
import EditFoodItem from "./Components/Admin/Resturant/EditFoodItem";
import FoodMenu from "./Components/Common/FoodMenu";
import SingleProduct from "./Components/Common/SingleFood";
import BreakfirstFoodMenu from "./Components/Common/BreakfirstFoodMenu";
import LunchFoodMenu from "./Components/Common/LunchFoodMenu";
import TeaFoodMenu from "./Components/Common/TeaFoodMenu";
import DinnerFoodMenu from "./Components/Common/DinnerFoodMenu";

import EmployeeDash from "./Components/Admin/Employee/Employee";
import AddEmployee from "./Components/Admin/Employee/AddEmployee";
import GetAllEmployee from "./Components/Admin/Employee/GetAllEmployee";
import EditEmployee from "./Components/Admin/Employee/EditEmployee";

import ParkingDash from "./Components/Admin/Parking/Parking";
import AddParkingList from "./Components/Admin/Parking/AddParkingList";
import GetAllParkingList from "./Components/Admin/Parking/GetAllParkingList";
import EditParkingList from "./Components/Admin/Parking/EditParkingList";

import StoresDash from "./Components/Admin/Stores/Stores";
import AddStoreItem from "./Components/Admin/Stores/AddStoreItem";

import LaundryDash from "./Components/Admin/Laundry/Laundry";
import AddLaundrySchedule from "./Components/Admin/Laundry/AddLaundrySchedule";

import RoomDash from "./Components/Admin/Room/Room";
import AddRoom from "./Components/Admin/Room/AddRoom";
import GetAllRoomDetails from "./Components/Admin/Room/GetAllRooms";
import GetSingleRooms from "./Components/Admin/Room/GetSingleRooms";
import GetDoubleRooms from "./Components/Admin/Room/GetDoubleRooms";
import GetDeluxRooms from "./Components/Admin/Room/GetDeluxRooms";
import GetLuxaryRooms from "./Components/Admin/Room/GetLuxaryRooms";
import EditRoom from "./Components/Admin/Room/EditRoom";

import GymDash from "./Components/Admin/Gym/Gym";
import AddGym from "./Components/Admin/Gym/AddGym";
import GetAllGymSchedule from "./Components/Admin/Gym/GetAllGymSchedule";
import EditGym from "./Components/Admin/Gym/EditGym";

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customer-home" exact component={HomeLogin} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route
            path="/customer/activate/:activation_token"
            component={ActivationEmail}
            exact
          />

          {/* Restuarant  Route */}
          <Route path="/restuarant-dash" exact component={RestuarnatMenu} />
          <Route path="/add-food-menu" exact component={AddFoodMenu} />
          <Route
            path="/get-all-food-menu"
            exact
            component={GetAllFoodsMenuList}
          />
          <Route
            path="/get-all-breakfirst-food-menu"
            exact
            component={GetAllBreakfirstFoods}
          />
          <Route
            path="/get-all-lunch-food-menu"
            exact
            component={GetAllLunchFoods}
          />
          <Route
            path="/get-all-teatime-food-menu"
            exact
            component={GetAllTeaTimeFoods}
          />
          <Route
            path="/get-all-dinner-food-menu"
            exact
            component={GetAllDinnerFoods}
          />
          <Route
            path="/get-food-dtails-by-id/:id"
            exact
            component={EditFoodItem}
          />
          <Route path="/food-menu" exact component={FoodMenu} />
          <Route path="/single-food-item/:id" exact component={SingleProduct} />
          <Route path="/cart-food-item/:id" exact component={SingleProduct} />
          <Route
            path="/breakfirst-food-menu"
            exact
            component={BreakfirstFoodMenu}
          />
          <Route path="/lunch-food-menu" exact component={LunchFoodMenu} />
          <Route path="/tea-food-menu" exact component={TeaFoodMenu} />
          <Route path="/dinner-food-menu" exact component={DinnerFoodMenu} />

          {/* Employee Routes */}
          <Route path="/employee-dash" exact component={EmployeeDash} />
          <Route path="/add-new-employee" exact component={AddEmployee} />
          <Route path="/get-all-employee" exact component={GetAllEmployee} />
          <Route
            path="/get-emploee-dtails-by-id/:id"
            exact
            component={EditEmployee}
          />

          {/* Parking Routes */}
          <Route path="/parking-dash" exact component={ParkingDash} />
          <Route path="/add-parking-list" exact component={AddParkingList} />
          <Route path="/get-parking-list" exact component={GetAllParkingList} />
          <Route path="/edit-parking-details/:id" exact component={EditParkingList} />

          {/* Stores Routes */}
          <Route path="/stores-dash" exact component={StoresDash} />
          <Route path="/add-stores-item" exact component={AddStoreItem} />

          {/* Laundry Routes */}
          <Route path="/laundry-dash" exact component={LaundryDash} />
          <Route
            path="/add-laundry-schedule"
            exact
            component={AddLaundrySchedule}
          />

          {/* Room Routes */}
          <Route path="/room-dash" exact component={RoomDash} />
          <Route path="/add-new-room" exact component={AddRoom} />
          <Route
            path="/get-all-rooms-details"
            exact
            component={GetAllRoomDetails}
          />
          <Route
            path="/get-single-rooms-details"
            exact
            component={GetSingleRooms}
          />
          <Route
            path="/get-double-rooms-details"
            exact
            component={GetDoubleRooms}
          />
          <Route
            path="/get-delux-rooms-details"
            exact
            component={GetDeluxRooms}
          />
          <Route
            path="/get-luxary-rooms-details"
            exact
            component={GetLuxaryRooms}
          />
          <Route path="/edit-rooms-details/:id" exact component={EditRoom} />

          {/* Gym Routes */}
          <Route path="/gym-dash" exact component={GymDash} />
          <Route path="/add-new-gym" exact component={AddGym} />
          <Route
            path="/get-all-gym-schedule"
            exact
            component={GetAllGymSchedule}
          />
          <Route path="/get-gym-schedule-by-id/:id" exact component={EditGym} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
