import './App.sass';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './components/HomePage/HomePage';

export default function App(): JSX.Element {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  )
}
