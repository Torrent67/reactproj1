import React from 'react';

function NewKegForm() {
    return (
        <div>
            <br></br>
            <form>
                <input
                    type='text'
                    id='brand'
                    placeholder='Brand' /><br></br>
                <input
                    type='text'
                    id='name'
                    placeholder='Name' /><br></br>
                <input
                    type='text'
                    id='category'
                    placeholder='category' /><br></br>
                <input
                    type='number'
                    id='price'
                    min="0.00"
                    step="0.01"
                    max = "100.00"
                    placeholder='price' /><br></br>
                <input
                    type='text'
                    id='abv'
                    min="0.00"
                    step="0.01"
                    max = "100.00"
                    placeholder='Alcohol By Volume %' /><br></br>

                <button type='submit'>New Keg.</button>
            </form>
        </div>
    );
}

export default NewKegForm;