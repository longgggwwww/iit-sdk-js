## Giới thiệu

Đây là SDK cho phần mềm nội bộ xử dụng không cần internet của bộ học liệu điện tử IIT. Sử dụng cho [Local Server](https://github.com/lxdgc9/hldt.git)

## Cài đặt

```shell
yarn add https://github.com/lxdgc9/iit-sdk-js.git
```

### Hướng dẫn sử dụng

Dưới đây là hướng dẫn sử dụng từ reactjs

```typescript
import sdk from "@iit/sdk/dist";
import { School } from "@iit/sdk/dist/types";
import * as React from "react";

// Kết nối đến server local
sdk.course.offline.connect("http://localhost:3000");

export default function App() {
  const [myState, setState] = React.useState<School[]>();

  React.useEffect(() => {
    (async () => {
      const { data, err } = await sdk.course.offline.school.findMany({});
      if (err) {
        alert(err.message);
        return;
      }

      if (data) {
        setState(data);
      }
    })();
  }, []);

  const handleClick = async () => {
    const { status, err, data } = await sdk.course.offline.school.create({
      code: "code",
      name: "THPT ABCXYZ",
    });
    if (err) {
      alert(err.message);
    }
  };

  return <button onClick={handleClick}>{JSON.stringify(myState)}</button>;
}
```
