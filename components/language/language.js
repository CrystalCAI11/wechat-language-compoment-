const app = getApp()
import {
	zh
} from '/zh'
import {
	en
} from '/en'

Component({
	lifetimes: {
		attached() {
			this.updateContent()
			this.setData({
				content: app.globalData.content
			})
		}
	},

	methods: {
		/* get content from language */
		updateContent() {
			const lastLanguage = wx.getStorageSync('language')
			if (lastLanguage === 'en') {
				app.globalData.content = en
				wx.setStorageSync('content', en)
				wx.setStorageSync('language', 'en')
			} else {
				app.globalData.content = zh
				wx.setStorageSync('content', zh)
				wx.setStorageSync('language', 'zh')
			}
		},

		/* change language and update content */
		changeLanguage() {
			const language = wx.getStorageSync('language')
			if (language === 'zh') {
				wx.setStorageSync('language', 'en')
			} else {
				wx.setStorageSync('language', 'zh')
			}
			this.updateContent()
			wx.reLaunch({
				url: '/pages/index/index' //这里改成你自己的页面
			})
		}
	}
})