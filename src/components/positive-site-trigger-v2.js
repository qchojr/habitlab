const {polymer_ext} = require('libs_frontend/polymer_utils')

const {
  log_action,
} = require('libs_frontend/intervention_log_utils')

const {
  get_goal_info
} = require('libs_common/intervention_info')

const {
  get_streak
} = require('libs_common/streak_utils')

const {
  get_favicon_data_for_domain
} = require ('libs_common/favicon_utils')

polymer_ext({
  is: 'positive-site-trigger-v2',
  properties: {
    goal: {
      type: Object,
      observer: 'goal_changed'
    },
    positiveSite: {
      type: String,
      computed: 'compute_sitename(goal)'
    },
    positiveSiteIcon: {
      type: String
    },
    streakIconURL:{
      type: String,
      value: chrome.extension.getURL('icons/streak.svg') 
    },
    positiveGoalDescription: {
      type: String,
      computed: 'compute_description(goal)'
    },
    callToAction: {
      type: String,
      computed: 'compute_call_to_action(goal)'
    },
    // streak: {
    //   type: Number,
    //   value: 0
    // },
    in_facebook_news_feed: {
      type: Boolean,
      value: false
    }
  },
  goClicked: function() {
    log_action({'positive': 'Went to positive site.'})
    var domain = this.goal.domain
    if (domain.search("http") == -1) {
      domain = 'https://' + domain
    }
    window.location.href = domain
  },
  compute_sitename: function(goal) {
    if (goal == null)
      return ""
    return goal.sitename_printable
  },
  goal_changed: async function(goal) {
    this.positiveSiteIcon = await this.compute_icon(goal)
    this.streak = await get_streak(goal)    
    console.log('set goal to ' + goal.name)    
  },
  compute_icon: async function(goal) {
    if (goal == null) {
      return ""
    } else if (goal.icon != null) {
      return goal.icon
    } else if (goal.domain != null) {
      let icon = await get_favicon_data_for_domain(goal.domain)
      return icon
    } else {
      console.error("couldn't compute icon for goal " + goal.name)
      return ""
    }
  },
  compute_description: function(goal) {
    if (goal == null) {
      return ""
    }
    let description = goal.description
    description = description.substring(0, 1).toLowerCase() + description.substring(1)
    if (description.endsWith("."))
      description = description.substring(0, description.length-1)
    return description
  },
  compute_call_to_action: function(goal) {
    if (goal == null) {
      return ""
    } else {
      return goal.call_to_action
    }
  },
  ready: async function() {
    this.goal = get_goal_info()
  }
})


