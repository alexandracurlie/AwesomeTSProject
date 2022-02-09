import React, {memo, useCallback, useMemo, useState} from "react";
import {tabsGenerator} from "../../utilities";

export const Switcher = (Component: React.FC<any>) =>
  memo(({...props}: any) => {
    const [active, setActive] = useState<number>(0)
    const tabs = useMemo(() => tabsGenerator(props.tabs), [props.tabs])
    const onPress = useCallback((id: number) => { setActive(id) }, [setActive])

    return <Component {...props}
                      activeTab={active}
                      onPress={onPress}
                      tabs={tabs}
    />
  })

