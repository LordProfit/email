"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mail, Star, Trash } from 'lucide-react';

export default function EmailPage() {
  const [emails, setEmails] = useState([
    { id: 1, from: 'john@example.com', subject: 'Meeting Tomorrow', content: 'Hi, just a reminder about our meeting tomorrow at 10 AM.', read: false },
    { id: 2, from: 'sarah@example.com', subject: 'Project Update', content: 'Here\'s the latest update on the project. Please review and let me know your thoughts.', read: true },
    { id: 3, from: 'mike@example.com', subject: 'Lunch Next Week?', content: 'Hey, want to grab lunch next week? Let me know what day works best for you.', read: false },
  ]);

  const [newEmail, setNewEmail] = useState({ to: '', subject: '', content: '' });

  const handleSendEmail = () => {
    // Here you would typically send the email via an API
    console.log('Sending email:', newEmail);
    setNewEmail({ to: '', subject: '', content: '' });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Email</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Inbox</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Compose</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Compose Email</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="To"
                value={newEmail.to}
                onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })}
              />
              <Input
                placeholder="Subject"
                value={newEmail.subject}
                onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
              />
              <Textarea
                placeholder="Content"
                value={newEmail.content}
                onChange={(e) => setNewEmail({ ...newEmail, content: e.target.value })}
              />
              <Button onClick={handleSendEmail}>Send</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>From</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>{email.from}</TableCell>
                  <TableCell>{email.subject}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}