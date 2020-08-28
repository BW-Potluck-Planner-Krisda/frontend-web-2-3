import React from "react";

function Display(props) {

  return (
    <div>
      <div className='eventHeader'>
        <h1>Vest Family Reunion</h1>
        <h2>Jenni & Allen Vest</h2>
        <h2>Annual Celebration</h2>
        <h3>Friday, June 15. 2021 <span>5:45PM</span></h3>
        <label for="rsvp">RSVP:
        <select id="rsvp" name="rsvp">
            <option value="choose">please choose</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
            <option value="maybe">maybe</option>
          </select>
        </label><br></br>
        <label for='attending'>how many in your group?
        <select id="attending" name="attending">
            <option value="choose">please choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </label>
      </div>
      <h3 className='bringHeader' >Please choose something to Bring:</h3>
      <div className='bring'>
        
        <div className='bevForm'>
          <form className='form'>
            <h3>Beverages</h3>
            <p>*No Adult Beverages Please*</p>
            <label style={{ fontWeight: 'bold' }} for="bev1"> 2 liter of Coke
  <input type="checkbox" id="bev1" name="bev1" value="2liter" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="bev2"> 2 liter of Sprite
  <input type="checkbox" id="bev2" name="bev2" value="2liter2" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="bev3"> 2 liter of Dr. Pepper
  <input type="checkbox" id="bev3" name="bev3" value="2liter3" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="bev4"> 2 liter of Pepsi
  <input type="checkbox" id="bev4" name="bev4" value="2liter4" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="otherBev"> Other
  <input type="checkbox" id="otherBev" name="otherBev" value="otherBev" />
            </label>
            <select className='select' id="other" name="other">
              <option value="choose">please choose</option>
              <option value="sweetTea">Sweet Tea</option>
              <option value="teaUnsweetened">Tea Unsweetened</option>
              <option value="koolAid">KoolAid</option>
              <option value="otherBev">Other</option>
            </select>
            <input
              type='text'
              id='other'
              name='otherBev'
              placeholder='Other Beverage Name here'
              value={props.otherBev} />
          </form>
        </div>
        <div className='foodForm'>
          <form className='form'>
            <h3>Food</h3>
            <label style={{ fontWeight: 'bold' }} for="food1"> Casserole
  <input type="checkbox" id="food1" name="food1" value="casserole" />
            </label>
            <input
              type='text'
              id='food1'
              name='casserole'
              placeholder='Name of Casserole here'
              value={props.food1} />
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="food2"> Cole Slaw
  <input type="checkbox" id="food2" name="food2" value="coleSlaw" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="food3"> Potatoes
  <input type="checkbox" id="food3" name="food3" value="potatoes" />
            </label>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="food4"> Vegetables
  <input type="checkbox" id="food4" name="food4" value="vegetables" />
            </label>
            <label for="kind4">what kind?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="greenBeans">Green Beans</option>
              <option value="carrots">Carrots</option>
              <option value="peas">Peas</option>
              <option value="corn">Corn</option>
            </select>
            <label for="qnty">how many?:</label>
            <select className='select' id="qnty" name="qnty">
              <option value="choose">please choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label style={{ fontWeight: 'bold' }} for="otherFood"> Other
  <input type="checkbox" id="otherFood" name="otherFood" value="otherFood" />
            </label>
            <select className='select' id="other" name="other">
              <option value="choose">please choose</option>
              <option value="potatoChips">Potato Chips</option>
              <option value="hotDogs">Hot Dogs</option>
              <option value="cheese">Cheese</option>
              <option value='bread'>Bread</option>
              <option value="otherBev">Other</option>
            </select>
            <input
              type='text'
              id='otherFood'
              name='otherFood'
              placeholder='Other Food Name here'
              value={props.otherFood} />
          </form>
        </div>
        <div className='desForm'>
        <form className='form'>
            <h3>Desserts</h3>
            <label style={{ fontWeight: 'bold' }} for="des1"> Pie
  <input type="checkbox" id="des1" name="des1" value="pie" />
            </label>
            <input
              type='text'
              id='des1'
              name='pie'
              placeholder='Name & quantity of pie here'
              value={props.des1} />
            

            <label style={{ fontWeight: 'bold' }} for="des2"> Cake
  <input type="checkbox" id="des2" name="des2" value="cake" />
            </label>
            <input
              type='text'
              id='des2'
              name='cake'
              placeholder='Name & quantity of cake here'
              value={props.des2} />
            <label style={{ fontWeight: 'bold' }} for="des3"> Ice Cream
  <input type="checkbox" id="des3" name="des3" value="iceCream" />
            </label>
            <input
              type='text'
              id='des3'
              name='pie'
              placeholder='Name & quantity of Ice Cream here'
              value={props.des1} />

            <label style={{ fontWeight: 'bold' }} for="otherDes"> Other
  <input type="checkbox" id="otherDes" name="otherDes" value="otherDes" />
            </label>
            
            <input
              type='text'
              id='otherDes'
              name='otherDes'
              placeholder='Other Dessert Name & quantity here'
              value={props.otherDes} />
          </form>
          </div>
      </div>
    </div>
  )
}

export default Display;
