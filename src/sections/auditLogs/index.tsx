import { Button } from '@/components/ui/button';
import { Calendar, Download, Filter, User } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { auditLogList } from '@/data';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const AuditLogsSection = () => {
  const [mainDiv, setMainDiv] = useState<string>('0');
  const mainDivRef = useRef<HTMLDivElement>(null);
  console.log('main', mainDiv);
  useEffect(() => {
    if (mainDivRef.current) {
      const calculatedHeight = mainDivRef.current.clientHeight - 60 - 144 - 24 - 24 - 24 - 24;
      setMainDiv(calculatedHeight.toString());
    }
  }, []);

  return (
    <div ref={mainDivRef} className="h-full space-y-6 overflow-x-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Audit log</h2>
        <Button>
          Export
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="date" className="text-sm">
            Date
          </Label>
          <Select>
            <SelectTrigger id="date" className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="user" className="text-sm">
            User
          </Label>
          <Select>
            <SelectTrigger id="user" className="w-full">
              <User className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by user" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="albert">Albert Flores</SelectItem>
              <SelectItem value="kristin">Kristin Watson</SelectItem>
              <SelectItem value="bessie">Bessie Cooper</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="event" className="text-sm">
            Event
          </Label>
          <Select>
            <SelectTrigger id="event" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="edited">Edited</SelectItem>
              <SelectItem value="viewed">Viewed</SelectItem>
              <SelectItem value="exported">Exported</SelectItem>
              <SelectItem value="downloaded">Downloaded</SelectItem>
              <SelectItem value="added">Added</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <div
          className={cn(
            'overflow-auto',
            `h-[calc(100vh-208px)] md:h-[calc(100vh-680px)] lg:h-[570px]`,
          )}
        >
          <Table className="relative">
            <TableHeader className="sticky top-0 z-10">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
              <div className="absolute bottom-0 h-[1px] w-full bg-[#dad7d7]" />
            </TableHeader>
            <TableBody>
              {auditLogList.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={log.user.avatar} alt={log.user.name} />
                        <AvatarFallback>
                          {log.user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{log.user.name}</span>
                        <span className="text-sm text-muted-foreground">{log.user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1">
                      {log.action} {log.target}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default AuditLogsSection;
