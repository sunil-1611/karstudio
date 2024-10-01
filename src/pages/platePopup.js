
import LocalImages from "../assets/images" 
const platePopup = () => {
   return  <div id="license-popup" class="popup-container">
  <div class="popup">
    <h2>Would you like to remove the licence plate?</h2>
    <p>Add your logo to be placed in the licence plate area, or proceed without selecting.</p>
    
     <div class="image-container">
      <img src={LocalImages.Plate} alt="Car Outline" class="car-image" />
    </div>
    
     <form>

      <div className="radios">
        <div class="radio">
          <input type="radio" id="keep-plate" name="plate-option" value="keep" checked />
          <label for="keep-plate"><span>Keep the licence plate</span></label>
        </div>

        <div class="radio">
          <input type="radio" id="remove-add-logo" name="plate-option" value="remove" />
          <label for="remove-add-logo"><span>Remove and add logo</span></label>
        </div>
      </div>

       <div class="logo-upload">
        <label for="logo-upload">Your Logos</label>
        <div class="upload-btn">
          <button type="button" class="add-logo-btn">+ Add New</button>
        </div>
      </div>

       <div class="popup-buttons">
        <button type="button" class="cancel-btn btn-line">CANCEL</button>
        <button type="submit" class="confirm-btn btn">CONFIRM</button>
      </div>
    </form>
  </div>
</div>

}

export default platePopup