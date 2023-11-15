import { locationTypes } from "./enums";

export function getIconName(locationType) {
    switch(locationType)
    {
        case locationTypes.School:
            return "teenyicons:school-outline";

        case locationTypes.Company:
            return "lucide:factory";

        case locationTypes.Kilf:
            return "mdi:child-toy";

        case locationTypes.Külf:
            return "mdi:child-toy";

        case locationTypes.Home:
            return "carbon:home";

        case locationTypes.Casino:
            return "ion:dice";

        default:
            return "fluent-emoji-flat:cat-face";
    }
}

export function getIconColor(locationType) {

    switch(locationType)
    {
        case locationTypes.School:
            return "orange";

        case locationTypes.Company:
            return "purple";

        case locationTypes.Kilf:
            return "blue";

        case locationTypes.Külf:
            return "red";

        case locationTypes.Home:
            return "var(--color-primary)";

        case locationTypes.Casino:
            return "purple";

        default:
            return "grey";
    }
}


export function getIconSvg(locationType) {

    switch(locationType)
    {
        case locationTypes.School:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="transparent" outline="black" stroke="orange" d="m7.5 4.5l4 2v8h-8v-8l4-2Zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"/></svg>';

        case locationTypes.Company:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="purple" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm15-2h1m-6 0h1m-6 0h1"/></svg>';

        case locationTypes.Kilf:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="blue" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.813 4.813 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09c.45 0 .88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12"/></svg>';

        case locationTypes.Külf:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="red" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.813 4.813 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09c.45 0 .88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12"/></svg>';

        case locationTypes.Home:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="var(--color-primary)" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"/></svg>';

        case locationTypes.Casino:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9ZM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16Zm-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46ZM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Zm266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49ZM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24Z"/></svg>';

        default:
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#FFB02E" d="M4 25.942C4 28.174 5.763 30 7.918 30h16.164C26.237 30 28 28.073 28 25.84V6.43c0-1.3-1.59-1.9-2.485-1L20.974 10h-9.812L6.5 5.43c-.9-.9-2.5-.3-2.5 1v19.512Z"/><path fill="#FF822D" d="m9 10.927l-2.8 2.6c-.5.5-1.4.1-1.4-.6v-5.2c0-.6.9-1 1.4-.5l2.8 2.6c.3.3.3.8 0 1.1Zm14.05 0l2.8 2.6c.5.5 1.4.1 1.4-.6v-5.2c0-.6-.9-1-1.4-.5l-2.8 2.6c-.3.3-.3.8 0 1.1Z"/><path fill="#F70A8D" d="M17.043 20h-2.086a.5.5 0 0 0-.353.854l1.043 1.042a.5.5 0 0 0 .707 0l1.043-1.042a.5.5 0 0 0-.354-.854Z"/><path fill="#FF6723" d="M2.724 20.053a.5.5 0 1 0-.448.894l4 2a.5.5 0 1 0 .448-.894l-4-2Zm0 6.894a.5.5 0 1 1-.448-.894l4-2a.5.5 0 1 1 .448.894l-4 2Zm27.223-6.671a.5.5 0 0 0-.67-.223l-4 2a.5.5 0 1 0 .447.894l4-2a.5.5 0 0 0 .223-.67Zm-.671 6.671a.5.5 0 1 0 .448-.894l-4-2a.5.5 0 1 0-.448.894l4 2Z"/><path fill="#402A32" d="M12 17a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm8 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Z"/><path fill="#BB1D80" d="M16 23.106c-.537.539-1.457.894-2.5.894c-1.032 0-1.942-.347-2.482-.876c.12.724.928 4.376 4.982 4.376s4.861-3.652 4.982-4.376c-.54.529-1.45.876-2.482.876c-1.044 0-1.963-.355-2.5-.894Z"/></g></svg>';
        }
}