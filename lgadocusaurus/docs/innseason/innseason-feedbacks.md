---
sidebar_position: 2
title: Feedback Survey Server
---

# Introduction

This server applet, powered by Python, takes feedback survey data from HubSpot, sends the data out as a webhook and
then uses a small Python server to forward the information to specific e-mail addresses.

### Repository

https://github.com/lgaGit/LGAEmailPython

### Live Server

http://lgaemail-app.herokuapp.com/

### HubSpot Workflow

https://app.hubspot.com/workflows/2822935/platform/flow/197084469/edit/actions/1/webhook

### Notes

The main function that disperses the reports is `disperse_reports`. It is set up like the following:

```python 
def disperse_reports(property):
    if property == 'Coral Reef Resort':
        return ['crr5800@aol.com', 'miles.gifford@vriamericas.com']
    elif property == 'Edgewater':
        return ['johnverity@edgewatercapecodma.com', 'scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == 'Holly Tree':
        return ['brianmohearn@yahoo.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == 'Island Gulf Resort':
        return ['JoAnn.McNew@vriamericas.com', 'miles.gifford@vriamericas.com']
    elif property == 'Mountain View Resort':
        return 'realestate263@hotmail.com'
    elif property == 'Newport Bay Club':
        return 'admin@newportbayclub.com'
    elif property == 'Oceancliff I & II':
        return ['dands50k1@aol.com', 'scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == 'Riverview':
        return ['jphillips@theriverviewresort.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == 'Seamist':
        return ['seamistgm@aol.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == "Tanglwood Resort":
        return ['Virginia.Weniger@vriamericas.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == "Cove at Yarmouth":
        return ['medwards@coveatyarmouth.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    elif property == "Cape Code Holiday Estates":
        return ['Michael.mcmanus@vriamericas.com','scott.dravis@vriamericas.com', 'justin.smith@vriamericas.com']
    else:
        return ['thomas@lgamediagroup.com', 'shanna@lgamediagroup.com'];
```

### Known Issues / Limitations

Relies on HubSpot Workflow to push out webhook, meaning it can't work with HubSpot plans that don't support workflows.

This is sitting on the server but is _not_ being used. As of 6/29/2022 we were still waiting for details to establish
the sender of these e-mails.