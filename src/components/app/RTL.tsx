import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {useTranslation} from "react-i18next";

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function RTL(props: any) {
    const {t} = useTranslation();
    document.dir = t("_dir");

    if (t("_dir") === "rtl") {

        return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
    } else {
        return props.children
    }
}
