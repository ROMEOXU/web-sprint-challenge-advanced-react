import React from "react";
import { render,fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByLabelText} = render(<CheckoutForm />);
    const firstName = getByLabelText(/First Name/i);
    const lastName = getByLabelText(/Last Name/i);
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText,getByTestId,getByText} = render(<CheckoutForm />);
    const firstName = getByLabelText(/First Name/i);
    const lastName = getByLabelText(/Last Name/i);
    const address = getByLabelText(/Address/i);
    const city = getByLabelText(/City/i);
    const state = getByLabelText(/State/i);
    const zip = getByLabelText(/Zip/);

    fireEvent.change(firstName,{target:{value:'test-firstname'}});
    fireEvent.change(lastName,{target:{value:'test-lastname'}});
    fireEvent.change(address,{target:{value:'test-address'}});
    fireEvent.change(city,{target:{value:'test-city'}});
    fireEvent.change(state,{target:{value:'test-state'}});
    fireEvent.change(zip,{target:{value:'test-zip'}});

    expect(firstName.value).toBe('test-firstname');
    expect(lastName.value).toBe('test-lastname');
    expect(address.value).toBe('test-address');
    expect(city.value).toBe('test-city');
    expect(state.value).toBe('test-state');
    expect(zip.value).toBe('test-zip');
    fireEvent.click(getByTestId(/button/i));
   
});
