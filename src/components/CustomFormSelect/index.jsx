import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getLocation } from '../../app/api/address';
import PropTypes from 'prop-types';

export default function CustomFormSelect({ location, id, onChange, isInvalid, value }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocation(location, id).then(({ data }) => setLocations(data.data));
  }, [location, id]);
  console.log(locations);

  return (
    <Form.Select disabled={locations.length === 0} onChange={(e) => onChange(e.target.value)} isInvalid={isInvalid} defaultValue="">
      <option value="">Pilih lokasi...</option>
      {locations.map((location, i) => (
        <option value={JSON.stringify({ label: location.name, value: location.id })} key={i}>
          {location.name}
        </option>
      ))}
    </Form.Select>
  );
}

CustomFormSelect.defaultProps = {
  location: 'provinsi',
  isInvalid: false,
  value: '',
};

CustomFormSelect.propTypes = {
  location: PropTypes.oneOf(['provinsi', 'kota', 'kecamatan', 'kelurahan']).isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
