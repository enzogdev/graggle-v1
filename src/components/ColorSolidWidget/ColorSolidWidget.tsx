import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ColorSolidWidget() {
  return (
    <div className="flex flex-col gap-1">
      <Card>
        <CardHeader>
          <CardTitle className="tracking-tight text-sm font-medium">
            Recent Colors
          </CardTitle>
        </CardHeader>
        <CardContent>...</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="tracking-tight text-sm font-medium">
            Solid Colors
          </CardTitle>
        </CardHeader>
        <CardContent>@TODO create color catalog</CardContent>
      </Card>
    </div>
  );
}
