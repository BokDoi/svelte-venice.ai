import App from './App.svelte';
import './styles.css';

const app = new (App as any)({
  target: document.getElementById('app')!
});

export default app;
