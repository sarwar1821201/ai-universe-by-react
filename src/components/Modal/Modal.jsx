import React from 'react';

const Modal = (props) => {
    const { image_link, description, integrations, features } = props.singleData;
    return (
        <>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className="card lg:card-side bg-base-100 ">
  
  <div className="card-body border-2 border-error mr-2">
    <h2 className="card-title"> {description ? description : "Not Found"}</h2>

    <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map((value) => (
                    <p>
                      {value.feature_name ? value.feature_name : "Not Found"}
                    </p>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {integrations &&
                    integrations.map((int) => <p>{int ? int : "not found"}</p>)}
                </div>
              </div>

    
    {/* <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
  <figure className='w-full'><img  className="w-full h-96" src={image_link && image_link[0]} alt="Album"/></figure>
</div>

    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
            
        </>
    );
};

export default Modal;