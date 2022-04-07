export class Utils {
    isMobile() {
        return window && window.matchMedia("(max-width: 991.98px)").matches;
    }
}