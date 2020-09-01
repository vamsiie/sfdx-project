import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class BoatSearch extends LightningElement {
    isLoading = false;
  
    // Handles loading event
    handleLoading() { 
        isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() { 
        isLoading = true;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat() { 
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'Boat__c',
                actionName:'new'
            }
        }) ;
    }
}