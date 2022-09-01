import './style.css';
import { loadingService } from './loadingService';

const loadingOverlay = document.getElementById('loading-overlay');

loadingService.loadingStatus$.subscribe((isLoading) => {
  console.log(isLoading);
  if (isLoading) {
    loadingOverlay.classList.add('open');
  } else {
    loadingOverlay.classList.remove('open');
  }
});

setTimeout(() => loadingService.hideloading(), 3000);
