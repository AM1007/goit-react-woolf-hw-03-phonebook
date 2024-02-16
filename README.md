## Preparing for work

1. Make sure that the LTS version of Node.js is installed on the computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the project's basic dependencies using the `npm install` command.
3. Start the development mode, execute the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in the browser. This
   page will automatically reload after saving the changes project files.

---

## Phonebook

Develop a phone book contact storage application.

#### Step 1

Create an application with a form and a contact list. For this step, focus on
adding contact names and displaying the contact list. Ensure that the
application doesn't retain contacts between sessions (page refreshes).

Utilize the provided input markup with built-in validation for the contact name.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

The state stored in the parent `<App>` component must adhere to the following
format, and you cannot introduce new properties.

```js
state = {
  contacts: [],
  name: '',
};
```

Each contact should be an object with `name` and `id` properties. Use any
suitable package, such as [nanoid](https://www.npmjs.com/package/nanoid), to
generate identifiers. Once this step is done, the application should resemble
the following.

[Preview](./assets/step-1.png)

#### Step 2

Enhance the application's functionality by enabling users to input phone
numbers. Include `<input type="tel">` in the form and incorporate a property in
the state to store its value.

```js
state = {
  contacts: [],
  name: '',
  number: '',
};
```

Incorporate this input markup for a contact number with integrated validation.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

Once this step is done, the application should resemble the following.

[Preview](./assets/step-2.png)

#### Step 3

Integrate a search field allowing users to filter the contact list by name.

- The search field should be a formless input, and its value should be stored in
  the state as a controlled element.
- Ensure that the filtering logic is case-insensitive.

```js
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};
```

[Preview](./assets/step-3.gif)

When developing new functionality, consider hardcoding some data into the state
for convenience. This eliminates the need to manually enter data in the
interface for testing. For instance, you can utilize the following initial
state.

```js
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};
```

#### Step 4

Refactor the application implemented within a single `<App>` component by
segregating relevant parts into separate components. Restrict the state of the
`<App>` root component to only include the `contacts` and `filter` properties.

```js
state = {
  contacts: [],
  filter: '',
};
```

After refactoring, the root component of the application will include four
components: the form for adding contacts, the contact list, the contact list
element, and the search filter.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

#### Step 5

Prevent users from adding contacts with names already in the phone book. If
attempted, display a warning `alert`.

[Preview](./assets/step-5.png)

#### Step 6

Enhance the application functionality to enable users to delete previously saved
contacts.

[Preview](./assets/step-6.gif)
