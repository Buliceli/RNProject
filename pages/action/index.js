
import Types from './types'
export function bannerClickAction(index) {
    return {
        type:Types.BANNER_CLICK,
        index:index
    }
}