import { animateChild, query, style, transition, trigger, animate, group } from "@angular/animations";

export const routeTransitionAnimations = trigger('triggerName', [
  transition('Success => Board, Board => Task, Board => Setting, Board => BoardInfo, Task => SubTask, Setting => ContactList, Setting => Profile, Setting => Messages',
  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0%',
      left: '0%',
      right: '0%',
      bottom: '0%',
      width: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: '0' })]),
    query(':leave', [style({ left: '0%', opacity: '1' })]),
    query(':leave', animateChild()),
    group([
    query(':leave', [animate('0.2s ease-out', style({ left: '-100%', opacity: '0'}))]),
    query(':enter', [animate('0.2s ease-out', style({ right: '0%', opacity: '1'}))])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('Task => Board, Setting => Board, BoardInfo => Board, SubTask => Task, ContactList => Setting, Profile => Setting, Messages => Setting',
  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0%',
      left: '0%',
      bottom: '0%',
      right: '0%',
      width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: '0' })]),
    query(':leave', [style({ right: '0%', opacity: '1' })]),
    query(':leave', animateChild()),
    group([
    query(':leave', [animate('0.2s ease-out', style({ right: '-100%', opacity: '0'}))]),
    query(':enter', [animate('0.2s ease-out', style({ left: '0%', opacity: '1'}))])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('Task => BoardInfo, SubTask => Comment',
  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0%',
      bottom: '0%',
      height: '100%',
      width: '100%'
      })
    ]),
    query(':enter', [style({ top: '-100%', opacity: '0' })]),
    query(':leave', [style({ bottom: '0%', opacity: '1' })]),
    query(':leave', animateChild()),
    group([
    query(':leave', [animate('0.2s ease-out', style({ bottom: '0%', opacity: '0'}))]),
    query(':enter', [animate('0.2s ease-out', style({ top: '0%', opacity: '1'}))])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('BoardInfo => Task, Comment => SubTask',
  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0%',
      bottom: '0%',
      height: '100%',
      width: '100%'
      })
    ]),
    query(':enter', [style({ bottom: '0', opacity: '0' })]),
    query(':leave', [style({ top: '0%', opacity: '1' })]),
    query(':leave', animateChild()),
    group([
    query(':leave', [animate('0.2s ease-out', style({ top: '-100%', opacity: '0'}))]),
    query(':enter', [animate('0.2s ease-out', style({ bottom: '0%', opacity: '1'}))])
    ]),
    query(':enter', animateChild()),
  ])
])
