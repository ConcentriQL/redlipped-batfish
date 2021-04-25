//importing axios here to use (different way of doing fetch requests)
import axios from 'axios';
//import actionTypes file here
import * as types from './actionTypes.js';


//each action function can be exported individually
//eg: export const <FUNCTION NAME HERE> = (<IF FUNCTION NEEDS PARAMETERS INSERT HERE>) => (dispatch, getState) {
    //dipatch to be used to dispatch to our reducers
    //getState is used if we need to do any axios put/patch/delete etc based on current state
//}


//need to add a default seconds parameter when sending it


 /* GET from DB:
      - User Info (a single object)
      - User Contacts (Array of Objects)
      - User TouchEvents (Array of Objects)
  */
export const getUser = (userId) => (dispatch, getState) => {
  
  // variables to include in payload
  let userContacts, userTouchEvents, userInfo;

   // Stub data to sample DB
   //WE WILL NEED DATABASE USE ALIASES IN THE SELECT AND RETURNING STATEMENTS
   const userContactStub = [
    {contactId: 1, firstName: "Helen", lastName: "Regula", email: 'lsdjfalksd@gmail.com', phoneNumber: '123456789', prefferedMethod: 'email', contactCircle: 'family', contactPriority: 'high', touchEventIds: [1, 2]},
    {contactId: 2, firstName: "James", lastName: null, email: 'other@gmail.com', phoneNumber: '987654321', prefferedMethod: 'phone', contactCircle: 'family', contactPriority: 'low', touchEventIds: [1,2]},
    {contactId: 3, firstName: "Kat", lastName: '', email: '277@gmail.com', phoneNumber: '1231234455', prefferedMethod: 'phone', contactCircle: 'family', contactPriority: 'low', touchEventIds: []}
   ]

   const userTouchEventStub = [
    {eventId: 1, eventName: "Birthday", eventDate: '2022-01-09', touchTime: '4:00pm', eventImportance: 'high', eventRecurring: 'annual', numOfContacts: 1},
    {eventId: 2, eventName: "Follow Up", eventDate: '2021-05-18', touchTime: '7:59am', eventImportance: 'medium', eventRecurring: 'once', numOfContacts: 2}
   ]

   const userInfoStub = {
      userId: 3,
      firstName: 'Bilbo',
      lastName: 'Baggins',
      email: 'bibbaggins03@aol.com'
   }
   // takes the DB response and populates the userContacts object with each individual contact object
   // where the key is the contactId for simple lookup later (since ID may not equal array index)
   userContacts = {}
   userContactStub.forEach(contactObj => userContacts[contactObj.contactId] = contactObj)
   
   userTouchEvents = {}
   userTouchEventStub.forEach(eventObj => userTouchEvents[eventObj.eventId] = eventObj)

   userInfo = userInfoStub;
      
    // axios.get(/*specific path*/)
    // .then(response => { //response = array of objects
    //     response.forEach(contact => {
    //        
    //     })
    // })

    return {
      action: 'GET_USER',
      payload: {
        userContacts,
        userTouchEvents,
        userInfo
      },
    }
}

/*
Invoked on successful login verification from server 
 
*/

export const logIn = () => {
    

  
    
    
}




/*
export const GET_USER = 'GET_USER';
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_TOUCH_EVENT ='ADD_TOUCH_EVENT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_TOUCH_EVENT = 'UPDATE_TOUCH_EVENT';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const VIEW_CONTACTS = 'VIEW_CONTACTS';
export const VIEW_TOUCH_EVENTS = 'VIEW_TOUCH_EVENTS';

*/