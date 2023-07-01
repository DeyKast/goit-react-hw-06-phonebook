import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectPhones } from '../redux/selector';
import { deletePhone } from '../redux/phoneSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);
  const filter = useSelector(selectFilter);
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPhones.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            contactName={name}
            contactNumber={number}
            onClick={() => dispatch(deletePhone(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
