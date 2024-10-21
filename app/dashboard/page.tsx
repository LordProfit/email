import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Inbox, Mail, FileText } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Compose Email
            </Button>
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" /> Create Task
            </Button>
            <Button className="w-full">
              <Inbox className="mr-2 h-4 w-4" /> Check Inbox
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Email sent to John Doe</li>
              <li>Meeting scheduled with Team</li>
              <li>Task "Project Review" completed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}