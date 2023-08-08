import { useNavigate } from "react-router-dom"


export const HomePage = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/search')
  }

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 72px)' }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: '300px', height: '300px', border: 'thin solid #000', borderRadius: '10px' }} className="d-flex justify-content-center align-items-center flex-column gap-3 text-center p-3">
        <h1>Superhero App</h1>
        <h2>Want to see superheros info...?</h2>
        <button
          onClick={onClick} 
          className='btn btn-primary'>Click here to search your favourites heroes
        </button>
      </div>
    </div>
  )
}
