const templates = {
    photos1: `
        <div class="grid-1">
            <div class="information">
                <h1 class="heading-1">Quote Tool</h1>
                <h3 class="heading-2">Step 1 of 2 - Photos</h3>
                <p class="information__paragraph">
                    Help us understand the overall requirements of your project by taking a photo of the entire pool area. Try to get all the fence runsin the one shot
                </p>
                <button id="btn_next" class="button button--desktop">next</button>
            </div>
        </div>
        <div class="grid-2">
            <div class="inputs">
                <h3 class="heading-3">Add Photo</h3>
                <div class="image-input">
                    <div class="image-input__upload-area">
                        <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                        <span class="image-input__upload-text">upload / drag image</span>
                        <input type="file" accept="image/*" class="image-input__upload-button"> 
                    </div>
                </div>
        
                <div class="text-input">
                    <textarea class="text-input__textarea" name="" placeholder="In few sentences describe the fence position in relation to the photo"></textarea>
                    <!-- <div contentEditable="true"></div> -->
                </div>
                <button id="btn_next" class="button button--mobile">next</button>
            </div>
        </div>
    `,


    photos2:`
        <div class="grid-1">
            <div class="information">
                <h1 class="heading-1">Quote Tool</h1>
                <h3 class="heading-2">Step 1 of 2 - Photos</h3>
                <p class="information__paragraph">
                    If <b>necessary</b> please take a few more photos of the proof area. Focus on tricky areas like retaining walls, garden beds or climb zones or simply an area that you have some questions about. Add any notes to the photo if you think they will help
                </p>
                <button id="btn_next" class="button button--desktop">next</button>
            </div>
        </div>
        <div class="grid-2">
            <div class="inputs">
                <h3 class="heading-3">Add More Photos</h3>
                <div class="image-input">
                   <div class="image-input__collection">
                        <div class="image-input__upload-area image-input--collection-borderB image-input--space1 image-input__upload-area--just-center image-input--collection-borderR">
                            <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image image-input__uploadlable--constant-width" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                            <input type="file" accept="image/*" class="image-input__upload-button">
                        </div>
                        <div class="image-input__upload-area image-input--space1 image-input__upload-area--just-center image-input--collection-borderB">
                            <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image image-input__uploadlable--constant-width" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                            <input type="file" accept="image/*" class="image-input__upload-button">
                        </div>
                        <div class="image-input__upload-area image-input--space1 image-input__upload-area--just-center image-input--collection-borderR">
                            <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image image-input__uploadlable--constant-width" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                            <input type="file" accept="image/*" class="image-input__upload-button">
                        </div>
                        <div class="image-input__upload-area image-input__upload-area--just-center image-input--space1">
                            <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image image-input__uploadlable--constant-width" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                            <input type="file" accept="image/*" class="image-input__upload-button">
                        </div>
                   </div>
                </div>
                <button id="btn_next" href="" class="button button--mobile">next</button>
            </div>
        </div>
    `,


    mudmap1:`
        <div class="grid-1">
            <div class="information">
                <h1 class="heading-1">Quote Tool</h1>
                <h3 class="heading-2">Step 2 of 2 - Mud Map</h3>
                <p class="information__paragraph">
                    What does your pool fence look like from a birds eye point of view? On a piece of paper draw a quick and simple sketch.
                </p>
                <button id="btn_next" href="mudmap-2.html" class="button button--desktop">next</button>
            </div>
        </div>
        <div class="grid-2">
            <div class="inputs">
                <h3 class="heading-3">Add Mudmap Image</h3>
                <div class="video-container">
                    <video class="video" muted autoplay loop>
                        <source src="" type="video/mp4">
                      Your browser does not support the video tag.
                      </video>
                </div>
                <div class="image-input image-input--space1">
                    <div class="image-input__upload-area">
                        <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                        <span class="image-input__upload-text">upload / drag image</span>
                        <input type="file" accept="image/*" class="image-input__upload-button">
                    </div>
                </div>
                <button id="btn_next" href="mudmap-2.html" class="button button--mobile">next</button>
            </div>
        </div>
    `,

    mudmap2:`
        <div class="grid-1">
            <div class="information">
                <h1 class="heading-1">Quote Tool</h1>
                <h3 class="heading-2">Step 2 of 2 - Mud Map</h3>
                <p class="information__paragraph">
                    Add measurements and any site features. No need to be spot on at this stage As well as we will measure up onsite if you proceed. Tip some smart phones have measuring apps that serve as at treat for this step.
                </p>
                <button id="btn_next" href="thank_you.html" class="button button--desktop">next</button>
            </div>
        </div>
        <div class="grid-2">
            <div class="inputs">
                <h3 class="heading-3">Add Mudmap Image</h3>
                <div class="video-container">
                    <video class="video" muted autoplay loop>
                        <source src="" type="video/mp4">
                      Your browser does not support the video tag.
                      </video>
                </div>
                <div class="image-input image-input--space1">
                    <div class="image-input__upload-area">
                        <div class="image-input__uploadlable-image-container"><img class="image-input__uploadlable-image" src="/assets/upload.svg" alt="upload image"><button class="image-input__cancel">x</button></div>
                        <span class="image-input__upload-text">upload / drag image</span>
                        <input type="file" accept="image/*" class="image-input__upload-button">
                    </div>
                </div>
                <button id="btn_next" href="thank_you.html" class="button button--mobile">next</button>
            </div>
        </div>
    `,

    thankyou:`
        <div class="grid-1">
            <div class="information">
                <h1 class="heading-1">Quote Tool</h1>
                <h3 class="heading-2">Thank You</h3>
                <p class="information__paragraph">
                    Help us understand the overall requirements of your project by taking a photo of the entire pool area. Try to get all the fence runsin the one shot
                </p>
            </div>
        </div>
        <div class="grid-2">
            <div class="details">
                <h3 class="heading-3">Details</h3>
                <input class="details__text" type="text" placeholder="mobile" id="mobile">
                <input class="details__text" type="email" placeholder="email" id="email">
                <input class="details__text" class="datails__text"type="text" placeholder="firstname" id="firstname">
                <input class="details__text" type="text" placeholder="postcode" id="postcode">
                <button id="btn_submit" class="button button--submit">submit</button>
            </div>
        </div>
    `
  }