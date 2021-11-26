import MainPageScreen from '../MainPage';
import { AddReview } from '../AddReview/index';
import { HeadGuest } from '../HeadGuest/index';
import { MoviePageDetails } from '../MoviePageDetails';
import { MoviePageInList } from '../MoviePageInList';
import { MoviePageReviews } from '../MoviePageReviews';
import { MoviePage } from '../MoviePage';
import { MyList } from '../MyList';
//import { PlayerPause } from '../PlayerPause';
//import { Player } from '../Player';
import { SignInError } from '../SignInError/Index';
import { SignInMessage } from '../SignInMessage';
import { SignIn } from '../SignIn';

//import Test from '../test/test';

// const a = {
//   src : 'https://i.imgur.com/MK3eW3Am.jpg',
//   alt : 'Katherine Johnson',
// };

function App(): JSX.Element {
  return (
    <>
      <MainPageScreen />
      <AddReview />
      <HeadGuest />
      <MoviePageDetails />
      <MoviePageInList />
      <MoviePageReviews />
      <MoviePage />
      <MyList />
      {/* <PlayerPause /> */}
      {/* <Player /> */}
      <SignInError />
      <SignInMessage />
      <SignIn />
    </>
  );
  //return <Test src={a.src} alt={a.alt} />;
}

export default App;

