import React, {memo, useCallback, useMemo, useState} from "react";
import {getData, tabsGenerator} from "../../utilities";

export const Switcher = (Component: React.FC<any>) =>
  memo(({...props}: any) => {
    const [active, setActive] = useState<number>(0)
    const data = useMemo(() => getData(active), [active])
    const tabs = useMemo(() => tabsGenerator(props.tabs), [props.tabs])
    const onPress = useCallback((id: number) => { setActive(id) }, [setActive])

    return <Component {...props}
                      activeTab={active}
                      onPress={onPress}
                      data={data}
                      tabs={tabs}
    />
  })

