import { Subject, BehaviorSubject } from 'rxjs';

const loading$ = new BehaviorSubject(true);

export const loadingService = {
  showLaoding: () => loading$.next(true),
  hideloading: () => loading$.next(false),
  loadingStatus$: loading$.asObservable(),
};
