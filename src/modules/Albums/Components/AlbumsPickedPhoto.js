import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import Loading from '../../Loaders/loading';
import useAlbums from './useAlbums';
export default function AlbumsPickedPhoto() {
  const params = useParams();
  const navigate = useNavigate();

  const { Status, PickerUsers, Error, getPickedStickers } =
    useAlbums();

  useEffect(() => getPickedStickers(params.id), []);

  return (
    <>
      {Error === 'No Error' && Status === 'Loading' ? (
        <Loading />
      ) : Error === 'No Error' && Status === 'Done' ? (
        <Card
          style={{
            width: '18rem',
            flex: '1 1 auto',
            margin: '0.5% 5px',
          }}
        >
          <Card.Img variant="top" src={PickerUsers.avatar} />
          <Card.Body>
            <Card.Title>{PickerUsers.name}</Card.Title>
            <Card.Text>{PickerUsers.text}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Alert
          variant="danger"
          style={{
            width: '70%',
            margin: '0 auto',
          }}
        >
          This user doesn't exist <br></br>
          <Link to="/Albums"> please choose another user</Link>
        </Alert>
      )}
    </>
  );
}
