import { addnewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController.js';

const routes = (app) => {
app.route('/contacts')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    // Post endpoint
    .post(addnewContact);

app.route('/contacts/:contactID')
    // get a specific contact
    .get(getContactWithID)

    // updating a specific contact
    .put(updateContact)

    // deleting a specific contact
    .delete(deleteContact);
}

export default routes;
