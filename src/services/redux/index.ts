import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

export const INITIALIZE_APP = 'INITIALIZE_APP'
export const TOGGLE_AUTH = 'TOGGLE_AUTH'
export const SET_CHART_DATA = 'SET_CHART_DATA'

export const SET_JOB_SATISFACTION = `SET_JOB_SATISFACTION`
export const SET_MANAGER_APPROVAL = `SET_MANAGER_APPROVAL`
export const SET_MY_PERFORMANCE = `SET_MY_PERFORMANCE`
export const SET_TEAM_RATING = `SET_TEAM_RATING`

const defaultState = {
  universal: {
    initialized: false
  },
  chartData: {
    job_satisfaction: { labels: [''], datasets: [{ data: [0] }], fromZero: true },
    manager_approval: { labels: [''], datasets: [{ data: [0] }], fromZero: true },
    my_performance: { labels: [''], datasets: [{ data: [0] }], fromZero: true },
    team_rating: { labels: [''], datasets: [{ data: [0] }], fromZero: true }
  },
  user: {
    authenticated: false,
    data: {}
  }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, universal: { ...state.universal, initialized: true } }
    case TOGGLE_AUTH:
      return { ...state, user: { authenticated: action.status, data: action.value } }
    case SET_CHART_DATA:
      return { ...state, chartData: action.value }
    case SET_JOB_SATISFACTION:
      return { ...state, chartData: { ...state.chartData, jobSatisfaction: action.value } }
    case SET_MANAGER_APPROVAL:
      return { ...state, chartData: { ...state.chartData, managerApproval: action.value } }
    case SET_MY_PERFORMANCE:
      return { ...state, chartData: { ...state.chartData, myPerformance: action.value } }
    case SET_TEAM_RATING:
      return { ...state, chartData: { ...state.chartData, teamRating: action.value } }
    default:
      return state
  }
}

export default __DEV__ ? createStore(reducer) : createStore(reducer)
