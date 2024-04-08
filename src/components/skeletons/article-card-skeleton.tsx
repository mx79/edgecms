import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function ArticleCardSkeleton() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Skeleton className="h-5 w-52 mb-2"/>
        <Skeleton className="h-3 w-full mb-1"/>
        <Skeleton className="h-3 w-40 mb-1"/>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-72 w-full rounded-3xl"/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-10 w-20"/>
        <Skeleton className="h-4 w-28 rounded-full"/>
      </CardFooter>
    </Card>
  );
};
