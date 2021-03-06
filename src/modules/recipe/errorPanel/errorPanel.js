import { LightningElement, api } from 'lwc';
import { reduceErrors } from 'recipe/ldsUtils';

export default class ErrorPanel extends LightningElement {
    /** Generic / user-friendly message */
    @api friendlyMessage = 'Error retrieving data';

    viewDetails = false;

    /** Single or array of errors */
    @api errors;

    get errorMessages() {
        return reduceErrors(this.errors);
    }

    handleCheckboxChange(event) {
        this.viewDetails = event.target.checked;
    }
}
