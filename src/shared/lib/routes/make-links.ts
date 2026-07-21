import { BaseLink } from '../../model/navigation'
import { APP_ROUTES, AppRouteKey } from './app-routes'

export function makeLink(
  key: AppRouteKey,
  exact = false
): BaseLink {
  return {
    key,
    route: `/${APP_ROUTES[key]}`,
    exact
  }
}

export const defaultLinks: BaseLink[] = [
  makeLink('dashboard', true),
  makeLink('tracks'),
  makeLink('articles'),
  makeLink('course')
]
