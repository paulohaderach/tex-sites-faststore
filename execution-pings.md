# pings from `serverruntime,lighthouse,cypress,postinstall` 

## First run

> ec2 metadata `instance-identity/document`


### Summary

|              | postinstall | server1 | lighthouse | server2 | cypress | lighthouse | server3 |
| ------------ | ----------- | ------- | ---------- | ------- | ------- | ---------- | ------- |
| instanceType | r6a         | r6a     | r5d        | c5      | r6a     | r5d        | c6i     |



### 1) postinstall 

```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-01bcbccbed5cb6e9e",
  "instanceId" : "i-02939015971203e82",
  "instanceType" : "r6a.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-04T18:14:17Z",
  "privateIp" : "10.203.79.47",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```

### 2) serverruntime-1
```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-01bcbccbed5cb6e9e",
  "instanceId" : "i-02939015971203e82",
  "instanceType" : "r6a.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-04T18:14:17Z",
  "privateIp" : "10.203.79.47",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```

### 3) lighthouse

```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-01bcbccbed5cb6e9e",
  "instanceId" : "i-02dc7940c2c559fa3",
  "instanceType" : "r5d.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-04T18:18:29Z",
  "privateIp" : "10.203.77.154",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```


### 4) serverruntime 1
```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-01f44e79c9d7051c6",
  "instanceId" : "i-006c3495aa408502c",
  "instanceType" : "c5.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-05T12:18:07Z",
  "privateIp" : "10.203.70.237",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```

### 5) cypress

```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-0a3d05199db5ec17c",
  "instanceId" : "i-05211af51073e048f",
  "instanceType" : "r6a.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-06-05T17:08:40Z",
  "privateIp" : "10.203.72.12",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```

### 6) lighthouse

```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1b",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-01bcbccbed5cb6e9e",
  "instanceId" : "i-02dc7940c2c559fa3",
  "instanceType" : "r5d.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-04T18:18:29Z",
  "privateIp" : "10.203.77.154",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```

### 7) serverruntime 2
```json
{
  "accountId" : "558830342743",
  "architecture" : "x86_64",
  "availabilityZone" : "us-east-1c",
  "billingProducts" : null,
  "devpayProductCodes" : null,
  "marketplaceProductCodes" : null,
  "imageId" : "ami-0dcb2d7d97bcda689",
  "instanceId" : "i-09f68fdba5af4c9a1",
  "instanceType" : "c6i.4xlarge",
  "kernelId" : null,
  "pendingTime" : "2024-11-04T14:33:44Z",
  "privateIp" : "10.203.85.219",
  "ramdiskId" : null,
  "region" : "us-east-1",
  "version" : "2017-09-30"
}
```
